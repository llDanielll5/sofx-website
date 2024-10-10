export interface ClientBotsInterface {
  from: string;
  id?: string;
  messages: any[];
  stagesLength: number;
  stages: ClientStages;
}

export interface ClientWhatsappData {
  id?: string;
  uid?: string;
  name: string;
  email?: string;
  chatId?: string;
  botActive: boolean;
  phoneNumber: string;
  bots?: ClientBotsInterface[];
  payments?: any;
}

export enum ClientStages {}
