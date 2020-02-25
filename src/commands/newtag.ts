import {Command, flags} from '@oclif/command'

export default class NewTag extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ tgs newtag
newtag hello world from ./src/newtag.ts!
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

    const name = flags.name || 'helloworld'
    this.log(`newtag ${name} from .\\src\\commands\\newtag.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
