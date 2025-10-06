export interface IResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
  success: boolean;
}

export interface ListData<T = unknown> {
  list: T[];
  page: 1,
  pageSize: number;
  total: number;
  totalPages: number;
}
