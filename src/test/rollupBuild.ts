import type {Plugin, RollupOptions} from 'rollup'
import {rollup} from 'rollup'

export async function rollupBuild({
  options,
}: {
  options: RollupOptions,
}) {
  const build = await rollup(options)

  const outputOptions = Array.isArray(options.output) ? options.output
    : options.output ? [options.output]
      : []
  const outputs = await Promise.all(outputOptions.map(o => build.generate(o)))

  return {
    build,
    outputs,
  }
}
