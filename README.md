パッキングを可視化するツールです。

## 使い方

### default モード

標準的な描画モード

- モジュール数：M
- モジュール i の幅高 XY： Mw_i, Mh_i, Mx_i, My_i

```
M
Mw_1 Mh_1 Mx_1 My_1
Mw_2 Mh_2 Mx_2 My_2
...
Mw_M Mh_M Mx_M My_M
```

### pre-placed モード

pre-placed モジュールを灰色で表示するモード

- モジュール数：M
- pre-placed モジュール数：P
- free モジュール数：F
- pre-placed モジュール i の幅高 XY： Pw_i, Ph_i, Px_i, Py_i,
- free モジュール i の幅高 XY： Fw_i, Fh_i, Fx_i, Fy_i

```
M P F
Pw_1 Ph_1 Px_1 Py_1
Pw_2 Ph_2 Px_2 Py_2
...
Pw_P Ph_P Px_P Py_P
Fw_1 Fh_1 Fx_1 Fy_1
Fw_2 Fh_2 Fx_2 Fy_2
...
Fw_F Fh_F Fx_F Fy_F
```
