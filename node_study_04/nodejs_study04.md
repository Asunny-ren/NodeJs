### http性能测试

Apache ab 压力测试

```
    ab -n1000 -c10 http://localhost:2017/
    // -n1000 总的请求数
    // -c10 并发数为10，默认值为1
    // 地址后面需要加/
    // -t 测试总时间
    // -p post的时候的文件
    // -w 以html表格的方式输出结果
```


### http爬虫

$ npm install cheerio