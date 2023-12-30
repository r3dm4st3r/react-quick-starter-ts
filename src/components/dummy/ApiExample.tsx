import { FC } from 'react';
import {
  ActionIcon,
  Button,
  Group,
  List,
  ListItem,
  Paper,
  Skeleton,
  Text
} from '@mantine/core';
import { useGetReposQuery } from '@services/repo.service.ts';
import { IconBrandGithub, IconEyeBolt } from '@tabler/icons-react';
import dayjs from 'dayjs';

const LoadingRepoCard = () => {
  return (
    <div>
      <Paper
        shadow="xs"
        p="xl"
        w="100%"
        className="flex flex-col justify-between gap-5"
      >
        <div>
          <Skeleton w={70} h={70} radius="50%" />
          <Skeleton h={30} my={15} />
          <Skeleton h={50} my={15} />
          <Skeleton h={10} my={15} />
          <Skeleton h={10} my={15} />
          <Skeleton h={40} my={10} />
          <Skeleton h={40} mt={10} />
        </div>
      </Paper>
    </div>
  );
};
const ApiExample: FC = () => {
  const { data, isLoading } = useGetReposQuery('r3dm4st3r');
  return (
    <div>
      <Text fz={25} fw="bold" mb={20}>
        More Projects
      </Text>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <LoadingRepoCard />
          <LoadingRepoCard />
          <LoadingRepoCard />
          <LoadingRepoCard />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data?.map(item => {
            return (
              <Paper
                key={item?.id}
                shadow="xs"
                p="xl"
                w="100%"
                className="flex flex-col justify-between gap-5"
              >
                <div>
                  <ActionIcon variant="light" size={70} radius="50%" mb={15}>
                    <IconBrandGithub size={30} stroke={1.5} />
                  </ActionIcon>
                  <Text
                    fz={20}
                    lineClamp={1}
                    fw={600}
                    className="capitalize"
                    mb={10}
                  >
                    {item?.name?.replaceAll('-', ' ')}
                  </Text>
                  <Text fz={14}>{item?.description}</Text>
                  <List mt={20}>
                    <ListItem>
                      Updated : {dayjs(item?.pushed_at).format('DD-MM-YYYY')}
                    </ListItem>
                    <ListItem>
                      License : {item?.license?.spdx_id ?? 'MIT'}
                    </ListItem>
                  </List>
                </div>

                <Group gap={10}>
                  <Button
                    component="a"
                    href={item?.html_url}
                    target="_blank"
                    size="md"
                    fullWidth
                    variant="light"
                    color="orange"
                    leftSection={<IconBrandGithub stroke={1.5} />}
                  >
                    Github
                  </Button>
                  {item?.homepage && (
                    <Button
                      component="a"
                      href={item?.homepage}
                      target="_blank"
                      size="md"
                      variant="light"
                      fullWidth
                      leftSection={<IconEyeBolt stroke={1.5} />}
                    >
                      Live
                    </Button>
                  )}
                </Group>
              </Paper>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ApiExample;
