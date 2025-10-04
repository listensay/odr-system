export interface IResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
  success: boolean;
}

export interface ListData<T = unknown> {
  list: T[];
  currentPage: number;
  pageSize: number;
  total: number;
  totalPages: number;
}
