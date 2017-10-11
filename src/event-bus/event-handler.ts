import { Event } from './events/event'

export interface EventHandler {
  handle(event: Event): void
}
