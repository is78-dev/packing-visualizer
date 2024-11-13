パッキングを可視化するツールです。

## 使い方

### default モード

標準的な描画モード

- モジュール数：M
- モジュール i の XY 幅高： Mx_i, My_i, Mw_i, Mh_i

```
M
Mx_1 My_1 Mw_1 Mh_1
Mx_2 My_2 Mw_2 Mjh_2
...
Mx_M My_M Mw_M Mh_M
```

### pre-placed モード

pre-placed module を灰色で表示するモード

- モジュール数：M
- プリプレースモジュール数：P
- フリーモジュール数：F
- プリプレースモジュール i の XY 幅高： Px_i, Py_i, Pw_i, Ph_i
- フリーモジュール i の XY 幅高： Fx_i, Fy_i, Fw_i, Fh_i

```
M P F
Px_1 Py_1 Pw_1 Ph_1
Px_2 Py_2 Pw_2 Ph_2
...
Px_P Py_P Pw_P Ph_P
Fx_1 Fy_1 Fw_1 Fh_1
Fx_2 Fy_2 Fw_2 Fh_2
...
Fx_F Fy_F Fw_F Fh_F
```
