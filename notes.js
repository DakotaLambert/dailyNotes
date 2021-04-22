const notes = [
  {
    id: 1,
    subject: ["Data types", "Data structures", "Objects"],
    date: "4/15/21",
    feeling: "Feeling pretty solid, so far.",
    timeSpent: "I spent 12 hours on this.",
  },
  {
    id: 2,
    subject: "Syntax, and use.",
    date: "4/16/21",
    feeling:
      "Feeling okay, I lose the words for syntax but can work my way around to get my point across.",
    timeSpent: "I spent 1 hour on this.",
  },
];

const newNoteToday = {
  id: 3,
  subject: "Implementing id's",
  date: "4/16/21",
  feeling: "Splandifferinctious",
  timeSpent: "I spent 3 hours on this.",
};
notes.push(newNoteToday);

const searchTerm = "Splandifferinctious";

const dateCreated = Date();

const createNote = (note) => {
  //  const lastIndex = notes.length - 1
  //  const currentLastNote = notes[lastIndex]
  //  const maxId = currentLastNote.id
  //  const idForNewNote = maxId + 1
  const idForNewNote = notes.length + 1;

  note.id = idForNewNote;
  note.dateCreated = dateCreated;
  notes.push(note);
};

const moreNewerNote = {
  subject: "doing the thing",
  date: "4/19/21",
  feeling: "doofinshmirtenous",
  timeSpent: "I spent 3 hours on this.",
};
createNote(moreNewerNote);

console.log(notes);

// console.log(moreNewerNote)

// for (const entry of notes) {
//     if (entry.feeling === searchTerm) {

//         console.log(entry)
//     }
// }
