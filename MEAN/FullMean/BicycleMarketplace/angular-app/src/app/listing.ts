export class Listing {
  constructor(
    public _id: number = null,
    public title: string = "",
    public description: string = "",
    public price: number = 0,
    public location: string = "",
    public image: string = "",
    public user_id: number = 0,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ) { }
}
