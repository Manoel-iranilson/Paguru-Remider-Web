import {
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  Modal,
  Flex,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiMessageAltAdd } from "react-icons/bi";
import { useReminder } from "../../contexts/reminder";
import ModalAddTask from "../ModalAddTask";
import ModalFilterTask from "../ModalFilterTask";

interface IDrawerMobile {
  onClose: () => void;
  onOpenAddTasks: () => void;
  onOpenFilterTasks: () => void;
}

function DrawerMobile({
  onClose,
  onOpenAddTasks,
  onOpenFilterTasks,
}: IDrawerMobile) {
  const { control, setControl } = useReminder();
  return (
    <>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Paguru</DrawerHeader>
        <DrawerBody>
          <Flex flexDirection="column">
            <Button
              variant={"custom"}
              m="1.5"
              onClick={() => {
                setControl(true);
                onClose();
              }}
            >
              {" "}
              <AiFillHome /> Home
            </Button>
            <Button
              variant={"custom"}
              m="1.5"
              onClick={() => {
                onOpenAddTasks();
                onClose();
              }}
            >
              {" "}
              <BiMessageAltAdd />
              Adicionar Tarefas{" "}
            </Button>
            <Button
              variant={"custom"}
              m="1.5"
              onClick={() => {
                onOpenFilterTasks();
                onClose();
              }}
            >
              {" "}
              <BiMessageAltAdd /> Filtrar Tarefas{" "}
            </Button>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </>
  );
}

export default DrawerMobile;
