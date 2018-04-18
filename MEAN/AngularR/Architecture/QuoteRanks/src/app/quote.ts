export class Quote {
  constructor(
    public id: number = Math.floor(Math.random() * 1000),
    public text: string = "",
    public author: string = "",
    public votes: number = 0,
  ) { }
}
