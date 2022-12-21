import {
  Button,
  Center,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  useToast,
} from "@chakra-ui/react";
import { format } from "date-fns";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { useReminder } from "../../contexts/reminder";

interface IModalFilterTask {
  onClose: () => void;
}

export default function ModalFilterTask({ onClose }: IModalFilterTask) {
  const { tasks, setTasks, tempTask, setTempTask, control, setControl } =
    useReminder();
  const [dateToday, setDateToday] = useState(new Date());
  const toast = useToast();

  function ExposeTask(day: string) {
    tasks.map((e) => {
      if (e.date === day) {
        setControl(false);
        setTempTask(tasks.filter((el) => el.date == day));
      } else {
        return toast({
          title: "Data Invalida",
          position: "top",
          description: "Você não tem nenhuma atividade para está data",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    });
  }

  return (
    <ModalContent bgGradient="linear(to-t, #f39466, #f94d73)">
      <ModalHeader color="#fff">Visualizar Tarefas</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Center>
          <Calendar
            onChange={setDateToday}
            value={dateToday}
            onClickDay={(day) => {
              ExposeTask(format(day, "dd/MM/yyyy"));
              onClose();
            }}
          />
        </Center>
      </ModalBody>
    </ModalContent>
  );
}
