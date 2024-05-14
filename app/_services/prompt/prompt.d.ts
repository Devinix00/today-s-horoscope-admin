interface Prompt {
  gpt_id: number;
  admins_id: number;
  category: string;
  prompt_msg_name: string;
  prompt_msg: string;
  status: string;
  create_date: string;
  last_date: string;
}

interface History {
  gpt_id: number;
  category: Category;
  prompt_msg_name: string;
  prompt_msg: string;
  create_date: string;
  last_date: string;
  admins_id: number;
}
