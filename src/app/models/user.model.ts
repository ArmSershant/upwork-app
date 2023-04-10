export class User {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public password: string,
    public roleId: string,
    public salary: number | null,
    public description: string | null
  ) {}
}
