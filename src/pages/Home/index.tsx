import React, { useEffect, useState } from 'react';
import {
  useBreakpointValue,
  Flex,
  Center,
  Text,
  Button,
  Box,
  Checkbox,
  Drawer,
  useDisclosure,
  Modal,
} from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar';
import { useReminder } from '../../contexts/reminder';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { ITask } from '../../contexts/reminder/types';
import DrawerMobile from '../../components/DrawerMobile';
import ModalFilterTask from '../../components/ModalFilterTask';
import ModalAddTask from '../../components/ModalAddTask';

export default function Home() {
  const isDesktop = useBreakpointValue({ lg: 'none' });
  const { tasks, setTasks, tempTask, setTempTask, control, setControl } =
    useReminder();
  const [cont, setCont] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  function onDelete(item: ITask, id: number) {
    setTasks((prevState) =>
      prevState.map((el) => {
        if (el.date === item.date) {
          return { ...el, task: el.task.filter((task) => task.id !== id) };
        } else {
          return el;
        }
      })
    );
  }

  function onCompleted(item: ITask, id: number) {
    setTasks((prevState) =>
      prevState.map((el) => {
        if (el.date === item.date) {
          return {
            ...el,
            task: el.task.map((task) => {
              if (task.id === id) {
                return { ...task, isCompleted: !task.isCompleted };
              } else {
                return task;
              }
            }),
          };
        } else {
          return el;
        }
      })
    );
  }

  useEffect(() => {
    tasks.map((e) => setCont(e.task.length));
  }, [tasks]);

  return (
    <Flex>
      {isDesktop ? (
        <>
          <Sidebar />
          <Flex w="100%" h="100vh" flexDirection="column">
            <Flex justifyContent={'flex-end'} w="100%">
              <Center mr="14">
                <Text
                  bgGradient="linear(to-l, #f39466, #f94d73)"
                  bgClip="text"
                  fontSize="6xl"
                >
                  Paguru Remider Web
                </Text>
              </Center>
              <Center
                bgGradient="linear(to-t, #f39466, #f94d73)"
                fontSize={22}
                h={150}
                w={300}
                borderLeftRadius={200}
                color="#fff"
                fontWeight={300}
              >
                Você tem {cont} para Hoje
              </Center>
            </Flex>

            {control
              ? tasks.map((e) => {
                  if (e.task.length === 0) {
                    return;
                  } else {
                    return (
                      <Flex flexDirection="column" fontSize={35} pl={10} pb={2}>
                        {e.date}
                        {e.task.map((el) => (
                          <Flex alignItems="center">
                            <BsFillTrashFill
                              size={30}
                              style={{ cursor: 'pointer' }}
                              onClick={() => onDelete(e, el.id)}
                            />
                            {el.isCompleted ? (
                              <Text as="del">{el.taskItem}</Text>
                            ) : (
                              <Text>{el.taskItem}</Text>
                            )}

                            <Checkbox onChange={() => onCompleted(e, el.id)} />
                          </Flex>
                        ))}
                      </Flex>
                    );
                  }
                })
              : tempTask.map((e) => {
                  if (e.task.length === 0) {
                    return;
                  } else {
                    return (
                      <Flex flexDirection="column" fontSize={35} p={10}>
                        {e.date}
                        {e.task.map((el) => (
                          <Flex alignItems="center">
                            <BsFillTrashFill
                              size={30}
                              style={{ cursor: 'pointer' }}
                              onClick={() => onDelete(e, el.id)}
                            />
                            {el.taskItem}
                            <Checkbox onClick={() => onCompleted(e, el.id)} />
                          </Flex>
                        ))}
                      </Flex>
                    );
                  }
                })}
          </Flex>
        </>
      ) : (
        <Flex flexDirection="column" w="100%" h="100%">
          <Flex w="100%">
            <Modal isOpen={isOpenAddTasks} onClose={onCloseAddTasks}>
              <ModalAddTask onClose={onCloseAddTasks} />
            </Modal>
            <Modal isOpen={isOpenFilterTasks} onClose={onCloseFilterTasks}>
              <ModalFilterTask onClose={onCloseFilterTasks} />
            </Modal>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
              <DrawerMobile
                onOpenAddTasks={onOpenAddTasks}
                onOpenFilterTasks={onOpenFilterTasks}
                onClose={onClose}
              />
            </Drawer>
            <Button w={100} h={150} variant={'drawerVariant'} onClick={onOpen}>
              <AiOutlineMenuFold size={200} />
            </Button>
            <Flex justifyContent={'flex-end'} w="100%">
              <Center
                bgGradient="linear(to-t, #f39466, #f94d73)"
                fontSize={20}
                h={150}
                w={250}
                borderLeftRadius={200}
                color="#fff"
                fontWeight={300}
              >
                Você tem {cont} para Hoje
              </Center>
            </Flex>
          </Flex>
          <Center flexDirection="column">
            {control
              ? tasks.map((e) => {
                  if (e.task.length === 0) {
                    return;
                  } else {
                    return (
                      <Flex flexDirection="column" fontSize={35} pl={10} pb={2}>
                        {e.date}
                        {e.task.map((el) => (
                          <Flex alignItems="center">
                            <BsFillTrashFill
                              size={30}
                              style={{ cursor: 'pointer' }}
                              onClick={() => onDelete(e, el.id)}
                            />
                            {el.isCompleted ? (
                              <Text as="del">{el.taskItem}</Text>
                            ) : (
                              <Text>{el.taskItem}</Text>
                            )}
                            <Checkbox
                              size="lg"
                              onChange={() => onCompleted(e, el.id)}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    );
                  }
                })
              : tempTask.map((e) => {
                  if (e.task.length === 0) {
                    return;
                  } else {
                    return (
                      <Flex flexDirection="column" fontSize={35} p={10}>
                        {e.date}
                        {e.task.map((el) => (
                          <Flex alignItems="center">
                            <BsFillTrashFill
                              size={30}
                              style={{ cursor: 'pointer' }}
                              onClick={() => onDelete(e, el.id)}
                            />
                            {el.taskItem}
                            <Checkbox
                              size="lg"
                              onClick={() => onCompleted(e, el.id)}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    );
                  }
                })}
          </Center>
        </Flex>
      )}
    </Flex>
  );
}
