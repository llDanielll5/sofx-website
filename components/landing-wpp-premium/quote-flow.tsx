"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FormikValues, useFormik } from "formik";
import * as Yup from "yup";
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  Users,
  DollarSign,
  Target,
  MessageCircle,
  CheckCircle2,
  Send,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPhone } from "@/src/utils";
import { whatsappPhone } from "@/src/constants/phone";

const businessTypes = [
  { id: "ecommerce", label: "E-commerce", icon: "🛒" },
  { id: "servicos", label: "Prestação de Serviços", icon: "🔧" },
  { id: "saude", label: "Saúde/Clínicas", icon: "🏥" },
  { id: "alimentacao", label: "Restaurantes/Delivery", icon: "🍔" },
  { id: "varejo", label: "Varejo/Lojas", icon: "🏪" },
  { id: "outro", label: "Outro", icon: "💼" },
];

const teamSizes = [
  { id: "1-5", label: "1-5 funcionários" },
  { id: "6-20", label: "6-20 funcionários" },
  { id: "21-50", label: "21-50 funcionários" },
  { id: "50+", label: "Mais de 50 funcionários" },
];

const budgets = [
  { id: "menos-500", label: "Menos de R$500,00/mês" },
  { id: "500-2000", label: "R$500,00 - R$ 2.000/mês" },
  { id: "2000-5000", label: "R$ 1.000 - R$ 5.000/mês" },
  { id: "5000+", label: "+ de 5.000/mês" },
  { id: "nao-sei", label: "Ainda não sei" },
];

const needs = [
  { id: "atendimento", label: "Automatizar Atendimento" },
  { id: "vendas", label: "Aumentar Vendas" },
  { id: "agendamento", label: "Agendamento Automático" },
  { id: "suporte", label: "Suporte ao Cliente" },
  { id: "marketing", label: "Campanhas de Marketing" },
  { id: "leads", label: "Captura de Leads" },
];

const steps = [
  {
    id: 1,
    title: "Qual o tipo do seu negócio?",
    subtitle: "Nos ajude a entender melhor sua empresa",
  },
  {
    id: 2,
    title: "Qual o tamanho da sua equipe?",
    subtitle: "Isso nos ajuda a dimensionar a solução",
  },
  {
    id: 3,
    title: "Qual seu orçamento mensal?",
    subtitle: "Para indicarmos o melhor plano",
  },
  {
    id: 4,
    title: "Quais suas principais necessidades?",
    subtitle: "Selecione todas que se aplicam",
  },
  {
    id: 5,
    title: "Como podemos entrar em contato?",
    subtitle: "Seus dados estão seguros conosco",
  },
];

type QuoteFormValues = {
  businessType: string;
  teamSize: string;
  budget: string;
  needs: string[];
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const initialValues: QuoteFormValues = {
  businessType: "",
  teamSize: "",
  budget: "",
  needs: [],
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const validationSchema: Yup.ObjectSchema<QuoteFormValues> = Yup.object({
  businessType: Yup.string().defined(),
  teamSize: Yup.string().defined(),
  budget: Yup.string().defined(),
  needs: Yup.array().of(Yup.string().required()).defined(),
  name: Yup.string().required("Nome e obrigatorio"),
  email: Yup.string().email("Email invalido").required("Email e obrigatorio"),
  phone: Yup.string()
    .matches(/^\(\d{2}\)\s\d{5}-\d{4}$/, "Telefone invalido")
    .required("Telefone e obrigatorio"),
  company: Yup.string().required("Nome da empresa e obrigatorio"),
  message: Yup.string().defined(),
});

export function QuoteFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendMessage = (values: QuoteFormValues) => {
    const msg = `
Olá! Gostaria de realizar um orçamento para minha empresa do Whatsbot Premium.

*Nome:* ${values.name}
*Empresa:* ${values.company}
*Email:* ${values.email}
*Telefone:* ${values.phone}
*Tipo de negócio:* ${values.businessType}
*Tamanho da equipe:* ${values.teamSize}
*Orçamento:* ${values.budget}
*Necessidades:* ${values.needs.join(", ")}
*Mensagem:* ${values.message || "Não informada"}
    `.trim();

    const zapHref = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(msg)}`;

    window.open(zapHref, "_blank", "noopener,noreferrer");
  };

  const formik = useFormik<QuoteFormValues>({
    initialValues,
    validationSchema: currentStep === 5 ? validationSchema : Yup.object({}),
    onSubmit: async (values) => {
      try {
        setIsSubmitting(true);

        console.log("Form submitted:", values);

        sendMessage(values);

        setIsSubmitted(true);
      } catch (error) {
        console.error("Erro ao enviar formulário:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formik.values.businessType !== "";
      case 2:
        return formik.values.teamSize !== "";
      case 3:
        return formik.values.budget !== "";
      case 4:
        return formik.values.needs.length > 0;
      case 5:
        return (
          formik.values.name !== "" &&
          formik.values.email !== "" &&
          formik.values.phone !== "" &&
          formik.values.company !== ""
        );
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (canProceed() && currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const toggleNeed = (needId: string) => {
    const currentNeeds = formik.values.needs;
    if (currentNeeds.includes(needId)) {
      formik.setFieldValue(
        "needs",
        currentNeeds.filter((n) => n !== needId),
      );
    } else {
      formik.setFieldValue("needs", [...currentNeeds, needId]);
    }
  };

  if (isSubmitted) {
    return (
      <section id="orcamento" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 rounded-3xl bg-card border border-border"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Orçamento Enviado com Sucesso!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Obrigado pelo interesse no WhatsBot Premium! Ficamos muito felizes
              em te atender!
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                formik.resetForm();
              }}
              variant="outline"
              className="cursor-pointer"
            >
              Fazer Novo Orçamento
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="orcamento" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Orçamento Personalizado
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Vamos encontrar a{" "}
            <span className="text-primary">solução perfeita</span> para você
          </h2>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Passo {currentStep} de 5
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round((currentStep / 5) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / 5) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form Card */}
        <motion.div
          className="p-8 rounded-3xl bg-card border border-border"
          layout
        >
          <form onSubmit={formik.handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1: Business Type */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {steps[0].title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {steps[0].subtitle}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {businessTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() =>
                          formik.setFieldValue("businessType", type.id)
                        }
                        className={`p-4 rounded-xl border text-left transition-all ${
                          formik.values.businessType === type.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="text-2xl mb-2 block">{type.icon}</span>
                        <span className="text-sm font-medium text-foreground">
                          {type.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Team Size */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {steps[1].title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {steps[1].subtitle}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {teamSizes.map((size) => (
                      <button
                        key={size.id}
                        type="button"
                        onClick={() =>
                          formik.setFieldValue("teamSize", size.id)
                        }
                        className={`p-4 rounded-xl border text-center transition-all ${
                          formik.values.teamSize === size.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="font-medium text-foreground">
                          {size.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Budget */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {steps[2].title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {steps[2].subtitle}
                  </p>

                  <div className="space-y-3">
                    {budgets.map((budget) => (
                      <button
                        key={budget.id}
                        type="button"
                        onClick={() =>
                          formik.setFieldValue("budget", budget.id)
                        }
                        className={`w-full p-4 rounded-xl border text-left transition-all ${
                          formik.values.budget === budget.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="font-medium text-foreground">
                          {budget.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 4: Needs */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {steps[3].title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {steps[3].subtitle}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {needs.map((need) => (
                      <button
                        key={need.id}
                        type="button"
                        onClick={() => toggleNeed(need.id)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          formik.values.needs.includes(need.id)
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="font-medium text-foreground">
                          {need.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 5: Contact Info */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {steps[4].title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {steps[4].subtitle}
                  </p>

                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome completo</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Seu nome"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="mt-1"
                        />
                        {formik.touched.name && formik.errors.name && (
                          <p className="text-sm text-destructive mt-1">
                            {formik.errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="company">Nome da empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Sua empresa"
                          value={formik.values.company}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="mt-1"
                        />
                        {formik.touched.company && formik.errors.company && (
                          <p className="text-sm text-destructive mt-1">
                            {formik.errors.company}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="mt-1"
                        />
                        {formik.touched.email && formik.errors.email && (
                          <p className="text-sm text-destructive mt-1">
                            {formik.errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">WhatsApp</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="(00) 00000-0000"
                          value={formik.values.phone}
                          onChange={(e) =>
                            formik.setFieldValue(
                              "phone",
                              formatPhone(e.target.value),
                            )
                          }
                          onBlur={formik.handleBlur}
                          className="mt-1"
                        />
                        {formik.touched.phone && formik.errors.phone && (
                          <p className="text-sm text-destructive mt-1">
                            {formik.errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">
                        Mensagem adicional (opcional)
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Conte-nos mais sobre suas necessidades..."
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        rows={3}
                        className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                type="button"
                variant="ghost"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>

              {currentStep < 5 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="gap-2"
                >
                  Continuar
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!canProceed() || isSubmitting}
                  className="gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Orcamento
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
