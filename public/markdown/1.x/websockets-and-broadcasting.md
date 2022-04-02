<!-- omit in toc -->
# Websockets and Broadcasting

- [Introduction](#introduction)
- [Broadcast Channels](#broadcast-channels)
- [Emitting Events](#emitting-events)
- [Receiving Events](#receiving-events)

## Introduction

% Modern applications often require established two-way server connection for real-time data updating. The best option is to use Websocket connections. Melonly provides a powerful API for managing these features.

## Broadcast Channels

% First though, you should get to know the concept of broadcasting channels. Channel is a class used for namespacing events with its own authorization logic. To create new channel class you may use CLI:

```
<span class="select-none mr-2">$</span>melon make channel chat
```

% The new `src/broadcasting/chat.channel.ts` file will contain following template:

```
import { BroadcastChannel, ChannelInterface } from '@melonly/core'

@BroadcastChannel('chat/:id')
export class ChatChannel implements ChannelInterface {
  public userAuthorized(): boolean {
    return true
  }
}
```

% String argument passed to decorator is channel name with dynamic parameter. The `userAuthorized` method is used to determine whether authenticated user is authorized to join the channel on the client side.

## Emitting Events

% Emitting events on the server side can be done using `Broadcaster`:

```
import { Broadcaster } from '@melonly/core'

Broadcaster.event('message', @`chat/${chatId}`)
```

## Receiving Events

% Now you'll be able to receive broadcasts on the client side, for example by using [Socket.io](https://socket.io) library. The example implementation you can see below:

```
&lt;script src="/socket.io/socket.io.js"&gt;&lt;/script&gt;

&lt;script&gt;
  const socket = io()

  socket.on(@`chat/${chatId}.message`, (message) =&gt; {
    console.log(message)
  })
&lt;/script&gt;
```
