class Todo {

  constructor(Title, Date) {
    this.Title = Title;
    this.Date = Date;
    this.Desc = '';
  }

  editTitle(Title) {
    this.Title = Title;
  }

  editDate(Date) {
    this.Date = Date;
  }

  editDesc(Desc) {
    this.Desc = Desc;
  }

  getTitle() {
    return this.Title;
  }
  
  getDate() {
    return this.Date;
  }

  getDesc() {
    return this.Desc;
  }
}

