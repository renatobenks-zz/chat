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
            name: 'Luck John',
            email: 'luck.john@gmail.com',
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
                  text: 'Im Luck, lets talk?',
                  createdAt: new Date().toISOString(),
                  author: {
                    id: '2013',
                    name: 'Luck John',
                    email: 'luck.john@gmail.com',
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
        '1001': {
          id: '1001',
          user: {
            id: '2012',
            name: 'Juquinha',
            email: 'juquinha@gmail.com',
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
                  id: '9128392',
                  text: 'Im Juqinha',
                  createdAt: new Date().toISOString(),
                  author: {
                    id: '2012',
                    name: 'Juquinha',
                    email: 'juquinha@gmail.com',
                  },
                },
              },
              {
                cursor: '1',
                node: {
                  id: '34937',
                  text: 'how are u?',
                  createdAt: new Date().toISOString(),
                  author: {
                    id: '2012',
                    name: 'Juquinha',
                    email: 'juquinha@gmail.com',
                  },
                },
              },
            ],
          },
        },
        '1002': {
          id: '1002',
          user: {
            id: '2011',
            name: 'Brendon James',
            email: 'brendon.james@gmail.com',
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
                  id: '12039120',
                  text: 'Hi, I wanna kill you!',
                  createdAt: new Date().toISOString(),
                  author: {
                    id: '2011',
                    name: 'Brendon James',
                    email: 'brendon.james@gmail.com',
                  },
                },
              },
            ],
          },
        },
        '1003': {
          id: '1003',
          user: {
            id: '2010',
            name: 'Bill Bon',
            email: 'bill.bon@gmail.com',
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
                  id: '3943849',
                  text: 'Hi!',
                  createdAt: new Date().toISOString(),
                  author: {
                    id: '2010',
                    name: 'Bill Bon',
                    email: 'bill.bon@gmail.com',
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
  id: string,
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
