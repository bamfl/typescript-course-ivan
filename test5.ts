type AnimalType = 'cat' | 'dog' | 'bird';

interface IAnimal {
  animal: AnimalType,
  breed: string,
  sterilized?: string
}

interface IAvailableAnimalData extends IAnimal {
  location: string,
  age?: number
}

interface INotAvailableAnimalData {
  message: string,
  nextUpdateIn: Date
}

enum AnimalStatus {
  AVAILABLE = 'available',
  NOT_AVAILABLE = 'not available'
}

// Request
interface IAnimalRequest extends IAnimal { };

// Response #1
interface IAvailableResponse {
  status: AnimalStatus.AVAILABLE,
  data: IAvailableAnimalData
}

// Response #2
interface INotAvailableResponse {
  status: AnimalStatus.NOT_AVAILABLE,
  data: INotAvailableAnimalData
}

type AnimalResponse = IAvailableResponse | INotAvailableResponse

const isAvailableAnimalResponse = (response: AnimalResponse): response is IAvailableResponse => {
  return response.status === AnimalStatus.AVAILABLE;
};

function checkAnimalData(animal: AnimalResponse): IAvailableAnimalData | string {
  if (isAvailableAnimalResponse(animal)) {
    return animal.data;
  } else {
    return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
  }
}
