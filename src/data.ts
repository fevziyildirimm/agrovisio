interface ToDoItem {
    title: String;
    message: String;
    creatingDate: Date;
    modifiedDate: Date;
    priority: Number;
  }
  const ToDoList: Array<ToDoItem> = [
    {
      title: "Ankara'ya Git",
      message: "Anıtkabiri gez,Atakulede Fotoğraf çekin",
      creatingDate: new Date("2021-01-16"),
      modifiedDate: new Date("2021-01-16"),
      priority: 1,
    },
    {
      title: "Adana'ya git",
      message: "Şalgam iç Acılı Adana ye",
      creatingDate: new Date("2021-08-23"),
      modifiedDate: new Date("2021-08-23"),
      priority: 4,
    },
    {
      title: "Maskeni tak",
      message: "Mesafeni Koru",
      creatingDate: new Date("2020-10-13"),
      modifiedDate: new Date("2020-10-13"),
      priority: 1,
    },
    {
        title: "Markete git",
        message: "Süt al",
        creatingDate: new Date("2021-02-28"),
        modifiedDate: new Date("2021-02-28"),
        priority: 6,
      },
      {
        title: "Reactı araştır",
        message: "Lifecyle ve state mantığını öğren",
        creatingDate: new Date("2021-02-28"),
        modifiedDate: new Date("2021-02-28"),
        priority: 6,
      },
      {
        title: "Redux ve Hookları araştır",
        message: "Ne işe yararlar",
        creatingDate: new Date("2020-02-23"),
        modifiedDate: new Date("2020-02-23"),
        priority: 6,
      },
      {
        title: "Su iç",
        message: "en az 3 lt iç",
        creatingDate: new Date("2020-01-16"),
        modifiedDate: new Date("2020-01-16"),
        priority: 1,
      },
      {
        title: "Fevziyi ara",
        message: "Borcunu iste",
        creatingDate: new Date("2021-03-16"),
        modifiedDate: new Date("2021-03-16"),
        priority: 6,
      },
      {
        title: "Atm ye git",
        message: "Su faturasını öde",
        creatingDate: new Date("2021-02-13"),
        modifiedDate: new Date("2021-02-13"),
        priority: 2,
      },
      {
        title: "Mersin'e git",
        message: "Tantuni ye",
        creatingDate: new Date("2021-01-17"),
        modifiedDate: new Date("2021-01-17"),
        priority: 6,
      },
  ];
  export default ToDoList
