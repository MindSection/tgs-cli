import {Command, flags} from '@oclif/command'

export default class NewTag extends Command {
  static description = 'describe the command here'

  static aliases = [
    'tag:new',
    'nt',
  ]

  static examples = [
    `$ tgs tag:new
new hello world from ./src/commands/tag/new.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(NewTag)

    if (args.length > 0) {
      const name = flags.name || 'helloworld'
      this.log(`new ${name} from .\\src\\commands\\tag\\new.ts`)
      if (args.file && flags.force) {
        this.log(`you input --force and --file: ${args.file}`)
      }
    } else {
      this.warn('Usage: ...')
    }
  }
}
