tgs-cli
=======

TagSet CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/tgs-cli.svg)](https://npmjs.org/package/tgs-cli)
[![Downloads/week](https://img.shields.io/npm/dw/tgs-cli.svg)](https://npmjs.org/package/tgs-cli)
[![License](https://img.shields.io/npm/l/tgs-cli.svg)](https://github.com/AlexanderLapygin/tgs-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g tgs-cli
$ tgs COMMAND
running command...
$ tgs (-v|--version|version)
tgs-cli/0.1.0 win32-x64 node-v12.14.0
$ tgs --help [COMMAND]
USAGE
  $ tgs COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tgs help [COMMAND]`](#tgs-help-command)
* [`tgs init [FILE]`](#tgs-init-file)

## `tgs help [COMMAND]`

display help for tgs

```
USAGE
  $ tgs help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src\commands\help.ts)_

## `tgs init [FILE]`

describe the command here

```
USAGE
  $ tgs init [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ tgs init
  init world from ./src/init.ts!
```

_See code: [src\commands\init.ts](https://github.com/MindSection/tgs-cli/blob/v0.1.0/src\commands\init.ts)_
<!-- commandsstop -->
