import { FC } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { persist } from '@utils/redux.ts';
import { store } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { LSColorSchemeManager } from '@/theme/manager/LSColorSchemeManager.ts';
import { routes } from '@/routes';
import { theme } from '@/theme';

export const appMode: 'light' | 'dark' | 'auto' = 'auto';

const LSSchemeManager = LSColorSchemeManager({
  key: 'theme'
});

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist} loading="Initializing...">
        <ColorSchemeScript defaultColorScheme={appMode} />
        <MantineProvider
          theme={theme}
          defaultColorScheme={appMode}
          colorSchemeManager={LSSchemeManager}
          withCssVariables
          deduplicateCssVariables
          withGlobalClasses
          withStaticClasses
        >
          <RouterProvider router={routes} />
        </MantineProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
