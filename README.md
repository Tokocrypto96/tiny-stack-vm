[![make.fun](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122) [![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/Tokocrypto96/tiny-stack-vm/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122) [![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/Tokocrypto96/tiny-stack-vm/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)

# tiny-stack-vm

A tiny stack virtual machine for make.fun's [“Build a tiny stack virtual machine, 22 November 2026” bounty](https://make.fun/bounty/tiny-stack-vm-01-run-20261122).

`main.ts` (Node 22, no dependencies) runs every program in `/input/<id>/program.bin` on its `input.bin` and writes `/output/<id>/stdout.bin` + `exit.txt`. The ISA: 32-bit wrapping integers, a 256-value data stack, a 64-deep call stack, 256 words of memory, input/output, and ten traps with their own exit codes — implemented exactly as the kit's reference VM specifies, including the step limit (1,000,000), output limit (65,536 bytes), and every edge case (wrapping `MUL`, `INT_MIN / -1`, remainder sign, unsigned `DIVU`/`MODU`/`LTU`, shifts masked to 5 bits, `PUSH8` sign extension, `EXIT` low byte).
