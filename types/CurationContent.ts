export interface InterestItem {
  id: number;
  title: string;
  imageUrl: string;
  editorName: string;
  publishedAt: string;
}
export interface CurationItem {
  id: number;
  title: string;
  editorName: string;
  publishedAt: string;
  imageUrl: string;
  category: string;
  reactionCount: number;
}
