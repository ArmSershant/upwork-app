export class FinishedWork {
  constructor(
    public budget: string,
    public category: string,
    public clientId: number,
    public description: string | null,
    public id: number,
    public status: string,
    public title: string,
    public user: {
      client: {
        id: number;
        freelancerId: number;
        workId: number;
        clientId: number;
      }[];
      description: string | null;
      email: string;
      freelancer: any[];
      id: number;
      password: string;
      role: {
        id: number;
        name: string;
        roleId: number;
        salary: any;
      };
      username: string;
    }
  ) {}
}
