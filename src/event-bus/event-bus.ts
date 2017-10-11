import { Event } from './events/event'
import { EventHandler } from './event-handler'

export interface EventBus {
  subscribe(event: Event | string, handler: EventHandler | string): boolean

  unSubscribe(event: Event | string, andler: EventHandler | string): boolean

  publish(event: Event): boolean

  dispose(): void

  listen(): void
}
