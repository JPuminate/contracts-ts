import { Event } from '../events/event'
import { EventHandler } from '../event-handler'

export interface SubscriptionManager {
  isEmpty(): boolean

  addSubscription(event: Event | string, handler: EventHandler | string): void

  removeSubscription(
    event: Event | string,
    handler: EventHandler | string
  ): void

  hasSubscriptionsForEvent(event: Event | string): void

  clear(): void

  getHandlersForEvent(event: Event | string): void

  getEventTypeFromKey(eventKey: string): void

  getEventKey(event: Event | string): void

  getSubscriptionKey(): void
}
