import { JokesData } from "@/views/Jokes/Jokes.vue";

export const defaultUserJokeData: JokesData[] = [
  {
    id: "1",
    question: "Can a kangaroo jump higher than the Empire State Building?",
    answer: "Of course! Buildings can’t jump.",
    isAnswerVisible: false,
    timestamp: Date.now(),
  },
  {
    id: "2",
    question: "What do you get if you cross an angry sheep with a moody cow?",
    answer: "An animal that’s in a baaaaaaaaad moooooooood.",
    isAnswerVisible: false,
    timestamp: Date.now(),
  },
];
