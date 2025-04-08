interface MotionButtonProps<T> {
  label: string;
  type: "button" | "submit" | "reset";
  className?: string;
  rightIcon?: Boolean;
  Icon?: React.ComponentType<{ className: string }> | string;
  func: (param: T) => T;
}

interface AiAnswerProps {
  explicacao: string;
  valido: Boolean;
}

interface IconButtonProps<T> {
  func: (param: T) => T;
  className?: string;
  Icon: React.ComponentType<{ className: string }>;
}

interface MotionDiv<T> {
  className?: string;
  func?: (param: T) => T;
  children: React.ReactNode;
}

interface LearnProps {
  trailIdRt: any;
  sectionId: any;
}

interface ProgramProps {
  programId: any;
}

interface ProgramContainerProps {
  programId: string;
  banner: string;
  description: string;
  estimatedTime: Number;
  requirements: any;
  title: string;
}

interface Interests {
  crypto: boolean;
  blockchain: boolean;
  rwa: boolean;
  smartcontracts: boolean;
  defi: boolean;
}

interface Kyc1Props<T> {
  setLevel: React.Dispatch<React.SetStateAction<string>>;
  level: string;
  handleTabClick: (param: string) => T;
}

interface Kyc2Props<T> {
  interests: Interests;
  setInterests: React.Dispatch<React.SetStateAction<Interests>>;
  handleTabClick: (param: string) => T;
  fetchKyc: () => Promise<void>;
}

interface KycIntroProps<T> {
  handleTabClick: (param: string) => T;
}

interface OnboardingProps<T> {
  handleTabClick: (param: string) => T;
}

interface ObIntro<T> {
  handleTabClick: (param: string) => T;
}

interface HandleScreenProps {
  activeTab: string;
}

interface TaskUnitsProps {
  text: string;
  id: string;
  trailId: string;
  done: Boolean;
  index: number;
}

interface TrailsPageProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface TrailCardHomeProps {
  Icon?: React.ComponentType<{ className: string }> | string;
  text: string;
  progress: number;
  trailId: string;
}

interface TrailSectionData<T> {
  contents: Array<T>;
}

interface Trail {
  categories: string[];
  introVideo: string;
  createdAt: { seconds: number; nanoseconds: number };
  description: string;
  estimatedTime: number;
  name: string;
  topics: string[];
  trailId: string;
}

interface AchievedNft {
  walletAddress: string;
  trailId: string;
  ipfs: string;
  createdAt: Date;
}
