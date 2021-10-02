<?php

session_id('cPerCodigo');
session_start();
session_destroy();
session_commit();
