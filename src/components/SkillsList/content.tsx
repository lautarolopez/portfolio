import ReactIcon from "@/components/Icons/ReactIcon";
import NextIcon from "@/components/Icons/NextIcon";
import NodeIcon from "@/components/Icons/NodeIcon";
import JavascriptIcon from "@/components/Icons/JavascriptIcon";
import TypescriptIcon from "@/components/Icons/TypescriptIcon";
import HTMLIcon from "@/components/Icons/HTMLIcon";
import CSSIcon from "@/components/Icons/CSSIcon";
import DenoIcon from "@/components/Icons/DenoIcon";
import PostgresIcon from "@/components/Icons/PostgresIcon";
import FigmaIcon from "@/components/Icons/FigmaIcon";
import AWSIcon from "@/components/Icons/AWSIcon";
import TailwindIcon from "@/components/Icons/TailwindIcon";

export const SKILLS = (iconSize: number = 60) => [
  {
    name: "React",
    icon: <ReactIcon height={iconSize} width={iconSize} colorMode="regular" />,
  },
  {
    name: "Next",
    icon: <NextIcon height={iconSize} width={iconSize} colorMode="regular" />,
  },
  {
    name: "Node",
    icon: <NodeIcon height={iconSize} width={iconSize} colorMode="regular" />,
  },
  {
    name: "Javascript",
    icon: (
      <JavascriptIcon height={iconSize} width={iconSize} colorMode="regular" />
    ),
  },
  {
    name: "Typescript",
    icon: (
      <TypescriptIcon height={iconSize} width={iconSize} colorMode="regular" />
    ),
  },
  {
    name: "HTML",
    icon: <HTMLIcon height={iconSize} width={iconSize} colorMode="regular" />,
  },
  {
    name: "CSS",
    icon: <CSSIcon height={iconSize} width={iconSize} colorMode="regular" />,
  },
  {
    name: "Deno",
    icon: <DenoIcon height={iconSize} width={iconSize} colorMode="regular" />,
  },
  {
    name: "Postgres",
    icon: (
      <PostgresIcon height={iconSize} width={iconSize} colorMode="regular" />
    ),
  },
  {
    name: "Figma",
    icon: <FigmaIcon height={iconSize} width={iconSize} colorMode="regular" />,
  },
  {
    name: "AWS",
    icon: <AWSIcon height={iconSize} width={iconSize} colorMode="regular" />,
  },
  {
    name: "Tailwind",
    icon: (
      <TailwindIcon height={iconSize} width={iconSize} colorMode="regular" />
    ),
  },
];
