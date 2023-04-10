export class Work {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public budget: number,
    public category: string,
    public clientId: any,
    public status: string
  ) {}
}
