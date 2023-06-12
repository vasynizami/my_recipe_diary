export class Recipe {
  public name!: string;
  public imgUrl: string | undefined;
  public course: [] | undefined;
  public cuisine: [] | undefined;
  public serves: string | undefined;
  public ingredients!: string;
  public instructions: string | undefined;
}