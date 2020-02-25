import {expect, test} from '@oclif/test'

describe('The newtag command', () => {
  test
  .stdout()
  .command(['newtag'])
  .it('runs newtag', ctx => {
    expect(ctx.stdout).to.contain('newtag helloworld')
  })
})
