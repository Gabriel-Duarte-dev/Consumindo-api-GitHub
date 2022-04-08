import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Flex w="100%" h="100%" justify="center" align="center" bg="#282a36">
      {children}
    </Flex>
  );
}
