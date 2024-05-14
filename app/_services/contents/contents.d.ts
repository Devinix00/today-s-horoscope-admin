interface Contents {
  msg_id: number;
  luck_date: string;
  category: Category;
  attribute1?: string;
  attribute2?: string;
  luck_msg: string;
}

interface ZodiacMessage {
  attribute2: string;
  luck_msg: string;
}

interface ZodiacContents {
  attribute1: string;
  messages: ZodiacMessage[];
}
