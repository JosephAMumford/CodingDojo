export class User {
  constructor(
    public id: number = null,
    public first_name: string = "",
    public last_name: string = "",
    public email: string = "",
    public password: string = "",
    public password_confirm: string = "",
    public street_address: string = "",
    public unit_apt: string = "",
    public city: string = "",
    public state: string = "",
    public lucky: boolean =  true,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}
