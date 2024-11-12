interface MotionButtonProps<T> {
  label: string;
  type: "button" | "submit" | "reset";
  className?: string;
  rightIcon?: Boolean;
  Icon?: React.ComponentType<{ className: string }> | string;
  func: (param: T) => T;
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

interface Kyc1Props<T> {
  setLevel: React.Dispatch<React.SetStateAction<string | undefined>>;
  level?: string;
  handleTabClick: (param: string) => T;
}

interface KycIntroProps<T> {
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
