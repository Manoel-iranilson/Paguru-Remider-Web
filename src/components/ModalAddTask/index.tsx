import {
  Button,
  Center,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { useReminder } from "../../contexts/reminder";
import { ITask } from "../../contexts/reminder/types";

interface IModalAddTask {
  onClose: () => void;
}

function ModalAddTask({ onClose }: IModalAddTask) {
  const { tasks, setTasks } = useReminder();
  const [newTask, setNewTask] = useState("");
  const [dateToday, setDateToday] = useState(new Date());
  const [newDate, setNewDate] = useState(format(dateToday, "dd/MM/yyyy"));

  function addTask() {
    const find = tasks?.find((el: ITask) => el.date === newDate);
    if (newTask == "") {
      console.log("error");
    } else {
      if (find) {
        setTasks((prevState) => {
          return prevState.map((el) => {
            if (el.date === find.date) {
              return {
                date: el.date,
                task: [
                  ...el.task,
                  {
                    taskItem: newTask,
                    isCompleted: false,
                    id: Math.floor(Math.random() * 100),
                  },
                ],
              };
            } else {
              return el;
            }
          });
        });
      } else {
        setTasks((prevState) => [
          ...prevState,
          {
            date: newDate,
            task: [
              {
                taskItem: newTask,
                isCompleted: false,
                id: Math.floor(Math.random() * 100),
              },
            ],
          },
        ]);
      }
    }
  }

  return (
    <ModalContent h="75%" bgGradient="linear(to-t, #f39466, #f94d73)">
      <ModalHeader color="#fff">Adicionar Tarefa</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Center flexDirection="column">
          <Input
            mb={5}
            placeholder="Descrição da Tarefa"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Calendar
            onChange={setDateToday}
            value={dateToday}
            onClickDay={(day) => setNewDate(format(day, "dd/MM/yyyy"))}
          />
          <Button
            mt={4}
            onClick={() => {
              addTask();
              onClose();
            }}
          >
            {" "}
            adicionar
          </Button>
        </Center>
      </ModalBody>
    </ModalContent>
  );
}

export default ModalAddTask;
