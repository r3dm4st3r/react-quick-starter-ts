import { ReactNode } from 'react';
import { Avatar, Image, Paper, Text, Tooltip } from '@mantine/core';
import Redux from '@images/logo/redux-logo.svg';
import Mantine from '@images/logo/mantine-logo.svg';
import React from '@images/logo/react-logo.svg';
import Prettier from '@images/logo/prettier.svg';
import TypeScript from '@images/logo/typescript.svg';
import EsLint from '@images/logo/eslint.svg';
import { Link } from 'react-router-dom';
import ApiExample from '@components/dummy/ApiExample.tsx';

const techStacks: { label: string; icon: ReactNode }[] = [
  { label: 'React', icon: React },
  { label: 'RTK Query', icon: Redux },
  { label: 'Mantine', icon: Mantine },
  { label: 'Prettier', icon: Prettier },
  { label: 'Typescript', icon: TypeScript },
  { label: 'Eslint', icon: EsLint }
];
const Welcome = () => {
  return (
    <section className="px-5 py-10 min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="grid grid-rows-1 gap-5">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <Tooltip
                label="Made by R3DM4ST3R"
                styles={{
                  tooltip: {
                    fontWeight: 'bold',
                    fontSize: '22px',
                    padding: '10px 20px'
                  }
                }}
              >
                <Link
                  to="https://github.com/r3dm4st3r?tab=repositories"
                  target="_blank"
                >
                  <Avatar
                    src="https://avatars.githubusercontent.com/u/101512784?v=4"
                    size="xl"
                    mx="auto"
                    mb={20}
                  >
                    PR
                  </Avatar>
                </Link>
              </Tooltip>
              <Text component="h1" fz={35} fw="bold">
                Quick Starter Template
              </Text>
              <Text fz={20} maw={750} my={20} mx="auto">
                A powerful, fully customized and ready to use Quick Starter
                Project based on the technology we love.
              </Text>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {techStacks.map(stack => {
              return (
                <Tooltip
                  key={stack.label}
                  label={stack.label}
                  styles={{
                    tooltip: {
                      fontWeight: 'bold',
                      fontSize: '22px',
                      padding: '10px 20px'
                    }
                  }}
                >
                  <Paper p="xl" shadow="xs">
                    <Image
                      maw={100}
                      mx="auto"
                      src={stack.icon}
                      alt={stack.label}
                    />
                  </Paper>
                </Tooltip>
              );
            })}
          </div>
          <div className="grid grid-cols-1 gap-5">
            <ApiExample />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
