// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
enum TypesOfMedia {
  AUDIO = 'audio',
  VIDEO = 'video'
}

// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
enum FormatsOfMedia {
  MP4 = '.mp4',
  MOV = '.mov',
  MKV = '.mkv',
  FLV = '.flv',
  WEBM = '.webM'
}

// Описание интерфейса, в котором:
interface IMedia {
  name: string;
  type: TypesOfMedia;
  format: FormatsOfMedia;
  subtitles?: string;
  marks?: unknown
}

function playMedia(
  { name, type, format, subtitles, marks }: IMedia = {
    name: "videoExample",
    type: TypesOfMedia.VIDEO,
    format: FormatsOfMedia.MP4,
  }
): string {
  let marksLog: string;

  // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
  if (Array.isArray(marks)) {
    marksLog = marks.join(', ')
    // Если это строка, то просто поместить её в marksLog
  } else if (typeof marks === "string") {
    marksLog = marks;
    // Если что-то другое - то marksLog = "Unsupported type of marks"
  } else {
    marksLog = "Unsupported type of marks"
  }
  // Не допускайте any!

  console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);
  // помните что это за оператор ??

  return "Media started";
}

playMedia({
  name: "WoWVideo",
  format: FormatsOfMedia.MP4,
  type: TypesOfMedia.VIDEO,
  subtitles: "hmhmhm hmhmhm doh",
  marks: ["4:30", "5:40"],
});
