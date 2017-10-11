import { Event } from './event-bus/events/event'

class UserCreated extends Event {
  userId: string
  constructor() {
    super()
    this.userId = 'ppp'
  }
}

let event = new UserCreated()

console.log(JSON.stringify(event))
