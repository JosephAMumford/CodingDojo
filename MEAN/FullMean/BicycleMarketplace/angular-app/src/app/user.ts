export class User {
  constructor(
    public user_id: number = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    public first_name: string = "",
    public last_name: string = "",
    public email: string = "",
    public password: string = "",
    public password_confirm: string = "",
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ) { }
}
