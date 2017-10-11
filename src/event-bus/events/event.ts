const uuidv4 = require('uuid/v4')

export abstract class Event {
  public readonly id: string

  public readonly creationDate: Date

  public sender: string

  public eventName: string

  public pusherId: string

  constructor(sender: string | any = null, pusherId: string | any = null) {
    this.id = uuidv4()
    this.creationDate = new Date()
    this.sender = sender
    this.pusherId = pusherId
    this.eventName = this.constructor.name
  }
}
