export interface QuoteDoc {
  _id: string;
  author: string;
  content: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export interface QuotePaginationResponse {
  results: QuoteDoc[];
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  lastItemIndex: number;
}
