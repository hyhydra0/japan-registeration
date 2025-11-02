import api from './api';

export interface FormSubmissionData {
  user_name: string;
  email: string;
  job: string;
  age: string;
  amount: string;
  ask_info: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const submitForm = async (data: FormSubmissionData): Promise<FormSubmissionResponse> => {
  try {
    const response = await api.post('/api/baoming', data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

