import {
  Box,
  Button,
  Center,
  Flex,
  Textarea,
  useDisclosure,
  Modal,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { BiMessageAltAdd } from "react-icons/bi";
import { useReminder } from "../../contexts/reminder";
import ModalAddTask from "../ModalAddTask";
import ModalFilterTask from "../ModalFilterTask";

function Sidebar() {
  const {
    isOpen: isOpenAddTasks,
    onOpen: onOpenAddTasks,
    onClose: onCloseAddTasks,
  } = useDisclosure();
  const {
    isOpen: isOpenFilterTasks,
    onOpen: onOpenFilterTasks,
    onClose: onCloseFilterTasks,
  } = useDisclosure();
  const { control, setControl } = useReminder();

  return (
    <Box h="100vh" w="3xs" boxShadow="2xl">
      <Center>To Do</Center>
      <Modal isOpen={isOpenAddTasks} onClose={onCloseAddTasks}>
        <ModalAddTask onClose={onCloseAddTasks} />
      </Modal>
      <Modal isOpen={isOpenFilterTasks} onClose={onCloseFilterTasks}>
        <ModalFilterTask onClose={onCloseFilterTasks} />
      </Modal>
      <Flex flexDirection="column">
        <Button variant={"custom"} m="1.5" onClick={() => setControl(true)}>
          {" "}
          <AiFillHome /> Home
        </Button>
        <Button variant={"custom"} m="1.5" onClick={onOpenAddTasks}>
          {" "}
          <BiMessageAltAdd />
          Adicionar Tarefas{" "}
        </Button>
        <Button variant={"custom"} m="1.5" onClick={onOpenFilterTasks}>
          {" "}
          <BiMessageAltAdd /> Filtrar Tarefas{" "}
        </Button>
      </Flex>
    </Box>
  );
}

export default Sidebar;
