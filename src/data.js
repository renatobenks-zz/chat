// @flow

const data = {
  me: {
    id: '2014',
    name: 'Renato Benkendorf',
    email: 'renatobenkendorfs@gmail.com',
  },
  chat: {
    '1024': {
      id: '1024',
      conversations: {
        '1000': {
          id: '1000',
          user: {
            id: '2013',
            name: 'Fernanda Godoy',
            email: 'fernanda.godoy2905@gmail.com',
          },
          messages: {
            pageInfo: {
              startCursor: '0',
              endCursor: '5',
              hasNextPage: true,
              hasPreviousPage: false,
            },
            edges: [
              {
                cursor: '0',
                node: {
                  id: '102392',
                  text: 'Hi!',
                  createdAt: new Date().toISOString(),
                  author: {
                    id: '2013',
                    name: 'Fernanda Godoy',
                    email: 'fernanda.godoy2905@gmail.com',
                  },
                },
              },
              {
                cursor: '1',
                node: {
                  id: '102393',
                  text: 'hey man',
                  createdAt: new Date().toISOString(),
                  author: {
                    id: '2014',
                    name: 'Renato Benkendorf',
                    email: 'renatobenkendorfs@gmail.com',
                  },
                },
              },
            ],
          },
        },
      },
    },
  },
};

export type User = {
  id: string,
  name: string,
  email: string,
};

export type Messages = {
  pageInfo: {
    startCursor: string,
    endCursor: string,
    hasNextPage: boolean,
    hasPreviousPage: boolean,
  },
  edges: [
    {
      cursor: string,
      node: {
        id: string,
        text: string,
        author: User,
        createdAt: string,
      },
    },
  ],
};

export type Conversation = {
  id: number,
  user: User,
  messages: Messages,
};

export type Chat = {
  conversations: {
    [id: string]: Conversation,
  },
};

export type Data = {
  chat: {
    [id: string]: Chat,
  },
};

export default data;
